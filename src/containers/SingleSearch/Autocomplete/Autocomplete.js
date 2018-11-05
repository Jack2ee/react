import React from 'react'

import axios from '../../../axios-orders';

const autocomplete = async () => {
    try {
        const autocomplete = await axios.get('http://localhost:3500/search/single')
    }
}