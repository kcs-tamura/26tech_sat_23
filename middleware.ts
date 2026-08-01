import { next } from "@vercel/edge"


export const config ={
    matcher: '/:path*',
}

export default function middleware(req: Request){
    const exceptedUser = process.env.SITE_USER || 'portfolio' 
    const exceptedPassword = process.env.SITE_PASSWORD

    if(exceptedPassword){
        const header = req.headers.get('authorization')
        if(header?.startsWith('Basic '))
        {
            const decoded = atob(header.slice('Basic '.length))
            const sep = decoded.indexOf(':')
            const user =decoded.slice(0, sep)
            const password = decoded.slice(sep + 1)

            if(user === exceptedUser && password === exceptedPassword){
                return next()
            }
        }
    }

    return new Response('Authentication required.', {
        status: 401,
        headers:{
            'WWW-Authenticate' : 'Basic realm="Portfolio", charset="UTF-8"',
        }
    })


}