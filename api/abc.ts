export default function (req: any, res: any) {
    console.log(req);
    res.status(200).json({
        name: 'jung-ji-hye'
    })
}

async function createTodo() {
    const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
            'username': 'KDT7_ParkYoungWoong'
        },
        body: JSON.stringify({
            title: '아침 먹기!'
        })
    })
    const json = await res.json()
    console.log(json)

    return json
}