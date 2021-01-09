export default () => ({
    port: parseInt(process.env.PORT) || 3001,
    database: {
        url: `mongodb+srv://yeen:${process.env.DBPASSWORD}@cluster0.tezwz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    }
});