import {Command, flags} from '@oclif/command'
import inquirer from 'inquirer'
import yaml from 'yaml'
import fs from 'fs-extra'

// Create self contained prompt module
const prompt =  inquirer.createPromptModule()

// Config file version
const CONFIG_FILE_VERSION = 1

const dotkConfigPath = `${process.cwd()}/.dotk.yml`

export default class Init extends Command {
  static description = 'generate .dotk.yml config file'

  static flags = {
    help: flags.help({char: 'h'}),
    force: flags.boolean({char: 'f'}),
  }

  static args = []

  async run() {
    const {flags} = this.parse(Init)

    const configExist = await fs.pathExists(dotkConfigPath)

    if (configExist && !flags.force) {
      this.log('Config file already exists. Use --force or -f to overwrite.')
      return
    }
    const answers = await prompt([
      // Get the project type
      {
        type: 'list',
        name: 'project_type',
        message: 'What is the project type?',
        choices: ['Node.js', 'Android', 'iOS', '.NET (C#)'],
      },
    ])
    // Save output to .dotk.yml in project dir
    const dotkConfigYaml = yaml.stringify({
      version: CONFIG_FILE_VERSION,
      ...answers,
    })

    await fs.outputFile(dotkConfigPath, dotkConfigYaml)
    this.log(`Generated ${dotkConfigPath}`)
  }
}
