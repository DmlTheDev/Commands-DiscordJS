import { ButtonInteraction, Collection, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Testing',

    slash: true,

    callback:async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_yes')
            .setEmoji('')
            .setLabel('Confirm')
            .setStyle('SUCCESS')
        )
        .addComponents(
        new MessageButton()
        .setCustomId('ban_no')
        .setLabel('Cancel')
        .setStyle('DANGER')

        )
        
        const linkRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL('https://dml.world')
            .setLabel('Vist DML-WORLD')
            .setStyle('LINK')
        )


        await msgInt.reply({
            content: 'Are you sure?',
            components: [row, linkRow],
            ephemeral: true,
        })

        const filter = (btnInt: ButtonInteraction) => {
            return msgInt.user.id === btnInt.user.id
        }

        const collector = channel.createMessageComponentCollector({
            max: 1,
            time: 25000,
        })

        collector.on('collect', (i: ButtonInteraction) => {
            i.reply({
                content: 'You clicked a button',
                ephemeral: true
            })
        })
        
        collector.on('end', async (Collection) => {
            Collection.forEach ((click) => {
                console.log(click.user.id, click.customId)
            })

            if (Collection.first()?.customId === 'ban_yes') {
                // ban the target user
            }
            await msgInt.editReply({
                content: 'An action has already been taken',
                components: [],
            })
        })
    },
} as ICommand
