export default {
	created() {
        // 接收nfc信号
        weex.requireModule('globalEvent').addEventListener('gateway.event', (e) => {
            console.log(e)
            const { event, data } = e;
            if (event === 'default' && data) {
                this.handleGateway(data)
                this.doAnalysis('shelf-induction', { data })
            }
        })
    }
}