import { ICommand } from 'wokcommands'

export default {
    category: 'Help',
    description: 'WOK help / dev help menu',
    slash: true,

  callback: ({ instance }) => {
    instance.commandHandler.commands.forEach((command) => {
      console.log(command)
    })
  },
} as ICommand