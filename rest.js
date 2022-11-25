//contrato
async function asyncCriarContrato(dadosContrato, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/contratos`;
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosContrato),
        headers: { 'Content-type': 'application/json' }
    };
    fetch(URL, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => resposta.json())
        .then(jsonResponse => proxsucesso())
        .catch(proxerro);
}

async function asyncLerContratos(proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/contratos`;
    fetch(URL)
      .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta;}) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncLerContratoById(id, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/contratos/${id}`;
    fetch(URL)
      .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta;}) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncAlterarContrato(dadosContrato, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/contratos/${dadosContrato.id}`;
    const putRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosContrato),
        headers: { 'Content-type': 'application/json' }
    };
    fetch(URL, putRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => resposta.json())
        .then(jsonResponse => proxsucesso())
        .catch(proxerro);	        	
}

async function asyncApagarContrato(id, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/contratos/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => proxsucesso())
        .catch(proxerro);	        		
}

//reserva

async function asyncCriarReserva(dadosReserva, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/reserva`;
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosReserva),
        headers: { 'Content-type': 'application/json' }
    };
    fetch(URL, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => resposta.json())
        .then(jsonResponse => proxsucesso())
        .catch(proxerro);
}

async function asyncLerReservas(proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/reserva`;
    fetch(URL)
      .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta;}) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncLerReservaById(id, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/reserva/${id}`;
    fetch(URL)
      .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta;}) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncAlterarReserva(dadosReserva, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/reserva/${dadosReserva.id}`;
    const putRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosReserva),
        headers: { 'Content-type': 'application/json' }
    };
    fetch(URL, putRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => resposta.json())
        .then(jsonResponse => proxsucesso())
        .catch(proxerro);	        	
}

async function asyncApagarReserva(id, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/reserva/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => proxsucesso())
        .catch(proxerro);	        		
}


//definição servico

async function asyncCriarDefServ(dadosDefServ, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/definicao`;
    const postRequest = {
        method: 'POST',
        body: JSON.stringify(dadosDefServ),
        headers: { 'Content-type': 'application/json' }
    };
    fetch(URL, postRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => resposta.json())
        .then(jsonResponse => proxsucesso())
        .catch(proxerro);
}

async function asyncLerDefServs(proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/definicao`;
    fetch(URL)
      .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta;}) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncLerDefServById(id, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/definicao/${id}`;
    fetch(URL)
      .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta;}) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncAlterarDefServ(dadosDefServ, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/definicao/${dadosDefServ.id}`;
    const putRequest = {
        method: 'PUT',
        body: JSON.stringify(dadosDefServ),
        headers: { 'Content-type': 'application/json' }
    };
    fetch(URL, putRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => resposta.json())
        .then(jsonResponse => proxsucesso())
        .catch(proxerro);	        	
}

async function asyncApagarDefServ(id, proxsucesso, proxerro) {
    const URL = `https://Prog2.gabrielzdev.com.br/definicao/${id}`;
    const deleteRequest = {
        method: 'DELETE'
    };
    fetch(URL, deleteRequest)
        .then(resposta => { if (!resposta.ok) throw Error(resposta.status); return resposta; } )
        .then(resposta => proxsucesso())
        .catch(proxerro);	        		
}



