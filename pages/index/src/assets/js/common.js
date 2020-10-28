export default {
    data() {
        return {
            env: {
                device: ''
            },
            filePath: "web/",
            videoPath: ''
        }
    },
    mounted() {
        const name = (process.env.project_name || 'Index').toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
        console.log(name)
        if (weex.config.env.platform !== "Web") {
            weex.requireModule("resource").getActivityEnv(envStr => {
                this.env = JSON.parse(envStr);
                this.doRender && this.doRender()
            })
            // 读取模块的文件路径
            weex.requireModule('resource').getModuleDirectory(name, (filePath) => {
                this.filePath = filePath
            })
            weex.requireModule('resource').getModuleDirectory('Video', (filePath) => {
                this.videoPath = filePath
            })
        } else {
            this.env.device = 'test_device'
            this.doRender && this.doRender()
        }
    },
    methods: {
        doAnalysis(type, data) {
            if (weex.config.env.platform === "Web") {
                console.log(data)
                return;
            }
            const dataArray = []
            for (let key in data) {
                dataArray.push(`${key}=${data[key]}`)
            }
            weex.requireModule("action").doAnalysis(type, "1.0.0", dataArray);
        },
        res(name) {
            return this.filePath + name
        },
        formatPrice(number) {
            if (!number) return '0.00'
            return parseFloat(number/100).toFixed(2)
        }
    }
}