import { MessageEmbed, Options } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testings',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],

    callback: async ({message, text}) => {
        const embed = new MessageEmbed()
        .setDescription("Hello World")
        .setTitle('Title')
        .setColor('GREY')
        .setFields([{
            name: 'name',
            value: 'value',
        }])
        
        const newMessage = await message.reply({
            embeds: [embed]
        })

        await new Promise(resolve => setTimeout(resolve, 5000))

        const newEmbed = newMessage.embeds[0]
        // 7:25 Ep6 (Edit Embed after 5 seconds)
    },
} as ICommand