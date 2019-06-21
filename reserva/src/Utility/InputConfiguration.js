import moment from 'moment'

export const returnInputConfiguration = () => {
    return {
        filial: {
            element: 'input', type: 'text', value: '', 
            validation: { required: true }, valid: false, touched: false,
            errorMessage: '', label: 'Filial:'
        },
        sala: {
            element: 'input', type: 'text', value: '', 
            validation: { required: true, maxLength: 60 }, valid: false, touched: false,
            errorMessage: '', label: 'Sala:'
        },
        dataInicio: {
            element: 'input', type: 'Date', value: moment(), 
            valid: true, touched: false,
            errorMessage: '', label: 'Date Início:'
        },
        dataFim: {
            element: 'input', type: 'Date', value: moment(), 
            valid: true, touched: false,
            errorMessage: '', label: 'Date Fim:'
        },

        horaInicio: {
            element: 'input', type: 'text', value: '', 
            validation: { required: true, maxLength: 5  }, valid: false, touched: false,
            errorMessage: '', label: 'Hora Início:'
        },
        horaFim: {
            element: 'input', type: 'text', value: '', 
            validation: { required: true, maxLength: 5 }, valid: false, touched: false,
            errorMessage: '', label: 'Hora fim:'
        },
        cafe: {
            element: 'input', type: 'checkbox', value: false, 
            validation: { required: false }, valid: true, touched: false,
            errorMessage: '', label: 'Café:'
        },
        quantidadePessoa: {
            element: 'input', type: 'number', value: '0', 
            validation: { required: false}, valid: true, touched: false,
            errorMessage: '', label: 'Quantidade Pessoa:'
        },
    }
}