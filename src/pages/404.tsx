import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import Image from 'next/image'

const NotFound: NextPage = () => {
    return <Layout title='Page not found'>
        <div style={{
            textAlign: 'center'
        }}>
            <Image src='/404.webp'
                alt=''
                width={450}
                height={433}
                priority
            />
        </div>
    </Layout>
}

export default NotFound