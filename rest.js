//contrato
async function asyncCriarContrato(dadosContrato) {
  const URL = `https://Prog2.gabrielzdev.com.br/contratos`;
  console.log(dadosContrato);
  const postRequest = {
    method: "POST",
    body: JSON.stringify(dadosContrato),
    headers: { "Content-type": "application/json" },
  };
  fetch(URL, postRequest)
    .then((resposta) => resposta.json())
    .then((jsonResponse) => console.log(jsonResponse));
}

async function asyncLerContratos(proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/contratos`;
  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonresponse) => proxsucesso(jsonresponse))
    .catch(proxerro);
}

async function asyncLerContratoById(id, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/contratos/${id}`;
  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonresponse) => proxsucesso(jsonresponse))
    .catch(proxerro);
}

async function asyncAlterarContrato(dadosContrato, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/contratos/${dadosContrato.id}`;
  const putRequest = {
    method: "POST",
    body: JSON.stringify(dadosContrato),
    headers: { "Content-type": "application/json" },
  };
  fetch(URL, putRequest)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonResponse) => proxsucesso())
    .catch(proxerro);
}

async function asyncApagarContrato(id, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/contratos/${id}`;
  let resp;
  const deleteRequest = {
    method: "POST",
  };
  fetch(URL, deleteRequest)
    .then((resposta) => {
      resposta.json();
    })
    .then((json) => {
      console.log(json + " -- CONTRATO APAGADA");
      resp = json;
    });

  return resp;
}

//reserva

async function asyncCriarReserva(dadosReserva) {
  const URL = `https://Prog2.gabrielzdev.com.br/reserva`;
  console.log(dadosReserva);
  const postRequest = {
    method: "POST",
    body: JSON.stringify(dadosReserva),
    headers: { "Content-type": "application/json" },
  };
  fetch(URL, postRequest)
    .then((resposta) => resposta.json())
    .then((jsonResponse) => console.log(jsonResponse));
}

async function asyncLerReservas(proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/reserva`;
  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonresponse) => proxsucesso(jsonresponse))
    .catch(proxerro);
}

async function asyncLerReservaById(id, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/reserva/${id}`;
  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonresponse) => proxsucesso(jsonresponse))
    .catch(proxerro);
}

async function asyncAlterarReserva(dadosReserva, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/reserva/${dadosReserva.id}`;
  const putRequest = {
    method: "POST",
    body: JSON.stringify(dadosReserva),
    headers: { "Content-type": "application/json" },
  };
  fetch(URL, putRequest)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonResponse) => proxsucesso())
    .catch(proxerro);
}

async function asyncApagarReserva(id) {
  const URL = `https://Prog2.gabrielzdev.com.br/reserva/${id}`;
  let resp;
  const deleteRequest = {
    method: "POST",
  };
  fetch(URL, deleteRequest)
    .then((resposta) => {
      resposta.json();
    })
    .then((json) => {
      console.log(json + " -- RESERVA APAGADA");
      resp = json;
    });

  const URLdef = `https://Prog2.gabrielzdev.com.br/definicao/${id}`;
  const deleteRequestDef = {
    method: "POST",
  };
  fetch(URLdef, deleteRequestDef)
    .then((resposta) => {
      resposta.json();
    })
    .then((json) => {
      console.log(json + " -- DEFINICAO APAGADA");
    });

  return resp;
}

//definição servico

async function asyncCriarDefServ(dadosDefServ) {
  const URL = `https://Prog2.gabrielzdev.com.br/definicao`;
  console.log(dadosDefServ);
  const postRequest = {
    method: "POST",
    body: JSON.stringify(dadosDefServ),
    headers: { "Content-type": "application/json" },
  };
  fetch(URL, postRequest)
    .then((resposta) => resposta.json())
    .then((jsonResponse) => console.log(jsonResponse));
}

async function asyncLerDefServs(proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/definicao`;
  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonresponse) => proxsucesso(jsonresponse))
    .catch(proxerro);
}

async function asyncLerDefServById(id, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/definicao/${id}`;
  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonresponse) => proxsucesso(jsonresponse))
    .catch(proxerro);
}

async function asyncAlterarDefServ(dadosDefServ, proxsucesso, proxerro) {
  const URL = `https://Prog2.gabrielzdev.com.br/definicao/${dadosDefServ.id}`;
  const putRequest = {
    method: "POST",
    body: JSON.stringify(dadosDefServ),
    headers: { "Content-type": "application/json" },
  };
  fetch(URL, putRequest)
    .then((resposta) => {
      if (!resposta.ok) throw Error(resposta.status);
      return resposta;
    })
    .then((resposta) => resposta.json())
    .then((jsonResponse) => proxsucesso())
    .catch(proxerro);
}

async function asyncApagarDefServ(id) {
  console.log(id);
  const URL = `https://Prog2.gabrielzdev.com.br/definicao/${id}`;
  let resp;
  const deleteRequest = {
    method: "POST",
  };
  fetch(URL, deleteRequest)
    .then((resposta) => {
      resposta.json();
    })
    .then((json) => {
      console.log(json + " -- DEFINICAO APAGADA");
      resp = json;
    });

  return resp;
}
