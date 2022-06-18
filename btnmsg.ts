// JAVASCRIPT IMPORTS:
// const roleMessageSchema = require('../models/role-message-schema')

// TYPESCRIPT IMPORTS:
import roleMessageSchema from '../models/role-message-schema'
import { TextChannel } from 'discord.js'
import { ICommand } from 'wokcommands'

// JAVASCRIPT EXPORTS:
// module.exports = {}

// TYPESCRIPT EXPORTS:
export default {
  category: 'Utility',
  description: 'Sends a message',

  slash: true,
  testOnly: false,
  guildOnly: false,

  minArgs: 2,
  expectedArgs: '<channel> <message>',
  expectedArgsTypes: ['CHANNEL', 'STRING'],

  requiredPermissions: ['ADMINISTRATOR'],

  callback: async ({ guild, message, interaction, args }) => {
    // Remove the channel from the arguments
    args.shift()

    // Get the message text
    const text = args.join(' ')

    // Get the channel
    let channel: TextChannel
    if (message) {
      channel = message.mentions.channels.first() as TextChannel
    } else {
      channel = interaction.options.getChannel('channel') as TextChannel
    }

    // Send the message
    const sentMessage = await channel.send(text)

    await new roleMessageSchema({
      _id: guild!.id,
      channelId: channel.id,
      messageId: sentMessage.id,
    }).save()

    if (interaction) {
      return {
        custom: true,
        content: 'Message sent',
        ephemeral: true,
      }
    }
  },
} as ICommand
