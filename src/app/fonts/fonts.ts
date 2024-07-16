import localFont from 'next/font/local'

export const helvetica = localFont({
    src: [
        {
            path: './HelveticaNeue-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './HelveticaNeue-Light.otf',
            weight: '300',
            style: 'normal',
        },
    ],
})