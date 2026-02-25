class Cliente{
    #CPF
    constructor(nome, CPF, endereco){
        this.nome = nome;
        this.#CPF = CPF;
        this.endereco = endereco;
        this.telefones = new Set()
    }
    get PegaCPFCliente(){
        return this.#CPF
    }
    get PegaCPFClienteMaiusculo(){
        return this.#CPF.toUpperCase()
    }
    get PegaCPFClienteMinusculo(){
        return this.#CPF.toLowerCase()
    }

    get PegaNomeClienteMaiusculo(){
        return this.nome.toUpperCase()
    }
    get PegaNomeClienteMinusculo(){
        return this.nome.toLowerCase()
    }
}

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero
    }
    get PegaDDDTelefoneMaiusculo(){
        return this.ddd.toUpperCase()
    }
    get PegaDDDTelefoneMinusculo(){
        return this.ddd.toLowerCase()
    }

    get PegaNumeroTelefoneMaiusculo(){
        return this.numero.toUpperCase()
    }
    get PegaNumeroTelefoneMinusculo(){
        return this.numero.toLowerCase()
    }
}

class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero
    }
    get PegaEstadoEnderecoMaiusculo(){
        return this.estado.toUpperCase()
    }
    get PegaEstadoEnderecoMinusculo(){
        return this.estado.toLowerCase()
    }

    get PegaCidadeEnderecoMaiusculo(){
        return this.cidade.toUpperCase()
    }
    get PegaCidadeEnderecoMinusculo(){
        return this.cidade.toLowerCase()
    }

    get PegaRuaEnderecoMaiusculo(){
        return this.rua.toUpperCase()
    }
    get PegaRuaEnderecoMinusculo(){
        return this.rua.toLowerCase()
    }

    get PegaNumeroEnderecoMaiusculo(){
        return this.numero.toUpperCase()
    }
    get PegaNumeroEnderecoMinusculo(){
        return this.numero.toLowerCase()
    }
}

class Empresa{
    #CNPJ
    constructor(razaoSocial, nomeFantasia, CNPJ, endereco){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#CNPJ = CNPJ;
        this.clientes = new Set();
        this.telefones = new Set()
    }
    get PegaCNPJEmpresa(){
        return this.#CNPJ
    }
    get PegaCNPJEmpresaMaiusculo(){
        return this.#CNPJ.toUpperCase()
    }
    get PegaCNPJEmpresaMinusculo(){
        return this.#CNPJ.toLowerCase()
    }

    get PegaRazaoSocialEmpresaMaiusculo(){
        return this.razaoSocial.toUpperCase()
    }
    get PegaRazaoSocialEmpresaMinusculo(){
        return this.razaoSocial.toLowerCase()
    }

    get PegaNomeFantasiaMaiusculo(){
        return this.nomeFantasia.toUpperCase()
    }
    get PegaNomeFantasiaMinusculo(){
        return this.nomeFantasia.toLowerCase()
    }

    detalhe(){
        let relatorio = `Razão Social: ${this.razaoSocial}\n Nome Fantasia: ${this.nomeFantasia}\n`
        relatorio += "----------------------------------------------------- \n"
        this.clientes.forEach(cliente => {
            relatorio += `Nome: ${cliente.nome}\n`
            relatorio += `Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero} \n`
            cliente.telefones.forEach(telefone => {
                relatorio += `ddd: ${telefone.ddd}\n numero: ${telefone.numero} \n`
            })
            relatorio += "----------------------------------------------------- \n"
        })
        return relatorio
    }
}

let enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av. José Longo', '234')

let empresaFantasma = new Empresa('ABC TM', 'Caça-Fantasmas', '123456789/0001-90', enderecoEmpresa)

empresaFantasma.telefones.add(new Telefone('12', '111234590'))
empresaFantasma.telefones.add(new Telefone('12', '222341829'))

let enderecoCliente1 = new Endereco('SP', 'São José dos Campos', 'Av. Andrômeda', '987')
let cliente1 = new Cliente('Vinícius', '123456789010', enderecoCliente1)
cliente1.telefones.add(new Telefone('12', '999990000'))
cliente1.telefones.add(new Telefone('12', '111223456'))

let enderecoCliente2 = new Endereco('SP', 'São José dos Campos', 'Av. Adhemar', '842')
let cliente2 = new Cliente('André', '00000000000', enderecoCliente2)
cliente2.telefones.add(new Telefone('11', '0000001234'))
cliente2.telefones.add(new Telefone('12', '1123412942'))

let enderecoCliente3 = new Endereco('SP', 'São José dos Campos', 'Av. Cassiano Ricardo', '568')
let cliente3 = new Cliente('Edgar', '234567890123', enderecoCliente3)
cliente3.telefones.add(new Telefone('23', '1123941989'))
cliente3.telefones.add(new Telefone('12', '8882842109'))

let enderecoCliente4 = new Endereco('SP', 'São José dos Campos', 'Av. Dep. Benedito Matarazzo', '423')
let cliente4 = new Cliente('Arvo', '22222222222', enderecoCliente4)
cliente4.telefones.add(new Telefone('52', '9992384121'))
cliente4.telefones.add(new Telefone('12', '1111111111'))

let enderecoCliente5 = new Endereco('SP', 'São José dos Campos', 'Av. Anchieta', '666')
let cliente5 = new Cliente('Jack', '66666666666', enderecoCliente5)
cliente5.telefones.add(new Telefone('12', '2123412341'))
cliente5.telefones.add(new Telefone('88', '4445123583'))

empresaFantasma.clientes.add(cliente1)
empresaFantasma.clientes.add(cliente2)
empresaFantasma.clientes.add(cliente3)
empresaFantasma.clientes.add(cliente4)
empresaFantasma.clientes.add(cliente5)

console.log(empresaFantasma.detalhe())