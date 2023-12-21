export default function (req: any, res: any) {
    console.log(req);
    res.status(200).json({
        name: 'jung-ji-hye'
    })
}