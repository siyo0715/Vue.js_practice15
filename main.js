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
    el: '#app',
    data: data,
    computed: {
        myData: function () {
            return this.$data;
        }
    }
})

// ゲッター = 変数が参照された時に関数を実行
// セッター = メッセージが書き変わった時に関数を実行