import { useLoaderData } from "@remix-run/react";
import { Container, Textarea } from "@yamada-ui/react"

export const loader = async () => {
    const response = await fetch("https://weather.tsukumijima.net/api/forecast/city/400040")
    const json = await response.json()
    return json;
};


const Whether = () => {
    // loaderのデータを取得
    const data = useLoaderData();

    return <Container>
        <Textarea autosize>{JSON.stringify(data)}</Textarea>
    </Container>
}

export default Whether