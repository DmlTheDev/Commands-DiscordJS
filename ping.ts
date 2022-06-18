import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong',
    slash: true,
    
    callback: ({ interaction }) => {
        const reply = 'Pong!'
        if (interaction) {
            interaction.reply({
                content: reply
            })
    
        }
    }
} as ICommand
