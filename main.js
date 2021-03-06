// let vm1 = new Vue({
//     el:'#app1',
//     data:{
//         message: 'インスタンス1'
//     }
// })

// let vm2 = new Vue({
//     el:'#app2',
//     data:{
//         message: 'インスタンス2'
//     },
//     methods: {
//         changeMessage1: function () {
//             vm1.message = 'インスタンス2から変えました'
//       }
//     },
// })

let data = {
    message: 'こんにちは',
    name: '名前です'
}

let vm = new Vue({
    data: data,
    computed: {
        myData: function () {
            return this.$data;
        }
    },
})

vm.$mount('#app')

// ゲッター = 変数が参照された時に関数を実行
// セッター = メッセージが書き変わった時に関数を実行

new Vue({
    data: {
        name: '山田'
    },
    // template:'<h1>こんにちは、{{name}}さん</h1>'
    // }).$mount('#app2')
    render: function (h) {
        return h('h1','こんにちは' + this.name + 'さん');
    },
}).$mount('#app3')