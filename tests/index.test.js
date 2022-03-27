import expect from 'expect'

import fa from 'src'

describe('yup-locale-fa string', async () => {
    it('should display length message', () => {
        expect(fa.string.length).toBe('طول ${path} باید دقیقاً ${length} کاراکتر باشد')
    })
})
