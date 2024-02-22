const {BigQuery} = require('@google-cloud/bigquery');

async function queryDataset() {
    const bigqueryClient = new BigQuery();
    const query = 'SELECT * FROM `gen-ai-igngar.oscar_winners.refined` LIMIT 3';

    const options = {
        query: query,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    const [rows] = await bigqueryClient.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row));
}

queryDataset().catch(console.error);