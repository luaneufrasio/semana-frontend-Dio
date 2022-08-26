import { subscribeToHellfireClub } from './firebase/hellfire-club.js'


const txtName = document.getElementById('txtName')

const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log('Inscrito com sucesso: ${subscriptionId}' )
})