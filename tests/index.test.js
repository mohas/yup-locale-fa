import expect from 'expect'

import { setLocale, object, string } from 'yup'
import fa from 'src'

setLocale(fa)

describe('yup-locale-fa string', async () => {
    it('should display length message', () => {
        const schema = object({
            name: string().length(2)
        })
        schema.validateSync({ name: '123' })
        expect().toContain('Welcome to yup')
    })
})
