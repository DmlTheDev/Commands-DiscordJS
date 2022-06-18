import { ICommand } from 'wokcommands'

export default {
  category: 'Testing', // Required for slash commands
  description: 'Displays your name and age', // Required for slash commands
  
  slash: true,
  testOnly: false, // Ensure you have test servers setup

  minArgs: 2,
  expectedArgs: '<name> <age>',
  
  callback: ({ interaction, args }) => {
    // Destructure the name and age from the args array
    const [name, age] = args

    // The interaction property will be undefined if the command is
    // ran as a legacy command. It is encouraged to check if 'message' or
    // 'interaction' exists before interacting with them.
    if (interaction) {
      interaction.reply({
        content: `Hello my name is ${name} and I am ${age} years old.`
      })
    }
  }
} as ICommand