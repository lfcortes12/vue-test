<template>
    <div>
        <h1>Transactions</h1>
    </div>
    <div>
        <h2>Welcome {{ user.fullname }}</h2>
        <h3 v-if="user.active"> Active user </h3>
        <table class="tableTransactions">
            <caption>My transactions</caption>
            <tr>
                <th scope="col">Account Number</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
            </tr>
            <tr v-bind:key="transaction.id" v-for="transaction in transactions">
                <td>{{ transaction.accountNumber }}</td>
                <td v-bind:class="[transaction.type === 'Withdraw' ? 'withdraw' : 'allocation']">{{ transaction.amount }}</td>
                <td>{{ transaction.type }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: "Transactions",
    data: function() {
        return {
            user: {
                fullname: "Juan Hernandez",
                id: 12345,
                active: true
            },
            transactions: [
                {
                    id: 1,
                    accountNumber: 12223,
                    amount: 800000,
                    type: "Allocation"
                }, {
                    id: 2,
                    accountNumber: 12223,
                    amount: 300000,
                    type: "Withdraw"
                }, {
                    id: 3,
                    accountNumber: 12223,
                    amount: 100000,
                    type: "Withdraw"
                }
            ],
        }
    },
}
</script>
<style>

    .tableTransactions {
        margin: 0 auto;
    }

    td, th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #ddd;
    }

    caption {
        text-align: left;
        color: green;
        font-weight: bold;
        padding-bottom: 10px;
    }

    .allocation {
        color: green;
        font-weight: bold;
    }

    .withdraw {
        color: brown;
        font-weight: bold;
    }
</style>