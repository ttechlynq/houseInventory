import {Html, Head, Main, NextScript} from 'next/document';


export default function Document(){
    return (
        <Html>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
            <link rel="stylesheet" href="css/globals.css" />
            </Head>
                <body>
                    <div className='conatiner'>
                    <Main />
                    <NextScript />
                    </div>
                </body>
           
        </Html>
    );
}