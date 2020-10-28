const fs = require('fs');
const path = require('path');

const CONFIG = {
	vertical: {
		start: 106.5,
		diff: [ 65, -101, 50, 70 ],
		box: [
			{
				"width": "365.3px",
		        "height": "333.3px",
		        "left": "70px"
			},
			{
				"width": "390px",
		        "height": "274px",
		        "left": "256px"
			},
			{
				"width": "410px",
		        "height": "218.75px",
		        "left": "133px"
			},
			{
				"width": "434px",
		        "height": "277.8px",
		        "left": "133px"
		    }
		],
		image: [
			{
				"width": "277.8px",
		        "height": "333.3px",
		        "top": "0",
		        "left": "0"
			},
			{
				"width": "250px",
		        "height": "250px",
		        "top": "0",
		        "left": "140px"
			},
			{
				"width": "318.1px",
		        "height": "218.75px",
		        "top": "0",
		        "left": "0"
			},
			{
		 		"width": "305.6px",
		        "height": "277.8px",
		        "top": "0px",
		        "left": "128.4px"
			}
		],
		text: [
			{
				"top": "42px",
		        "alignItems": "flex-end"
			},
			{
		        "top": "168px",
		        "alignItems": "flex-start"
		    },
		    {
		        "top": "20px",
		        "alignItems": "flex-end"
		    },
			{
				"top": "30px",
			    "alignItems": "flex-start"
			}
		]
	},
	horizontal: {
		start: 14,
		diff: [ 40, -72, -35.7, -126.85 ],
		box: [
			{
 				"width": "205.5px",
                "height": "187.5px",
                "top": "52px"
			},
			{
       			"width": "219.2px",
                "height": "158.3px",
                "top": "220.1px"
			},
			{
   				"width": "225.5px",
                "height": "123px",
                "top": "52px"
			},
			{
 				"width": "244.14px",
                "height": "156.25px",
                "top": "227.5px"
		    }
		],
		image: [
			{
 				"width": "156.25px",
                "height": "187.5px",
                "top": "0",
                "left": "0"
			},
			{
				"width": "140.6px",
                "height": "140.6px",
                "top": "0",
                "left": "58.6px"
			},
			{
				"width": "180px",
                "height": "123px",
                "top": "0",
                "left": "0"
			},
			{
		 		"width": "156.25px",
                "height": "156.25px",
                "top": "0px",
                "left": "87.89px"
			}
		],
		text: [
			{
				"top": "26px",
                "alignItems": "flex-end"
			},
			{
		        "top": "102px",
                "alignItems": "flex-start"
		    },
		    {
		        "top": "16px",
		        "alignItems": "flex-end"
		    },
			{
				"top": "24px",
			    "alignItems": "flex-start"
			}
		]
	}
}

const MENU = {
    "makeup": {
        "name": "彩妆",
        "data": [
            {
                "_id": "5f3f33a90f19ee87388f0342",
                "key": "lipstick",
                "area": "口红区",
                "name": "口红",
                "en": "LIPSTICK",
            },
            {
                "_id": "5f3f33a90f19ee87388f0343",
                "key": "eyeshadow",
                "area": "玩色区",
                "name": "眼影",
                "en": "EYE SHADOW"
            },
            {
                "_id": "5f3f33a90f19ee87388f0344",
                "key": "blush",
                "area": "玩色区",
                "name": "腮红",
                "en": "BLUSH"
            },
            {
                "_id": "5f3f33a90f19ee87388f0345",
                "key": "nail",
                "area": "玩色区",
                "name": "美甲片",
                "en": "NAIL"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0356",
                "key": "cleanser",
                "area": "底子区",
                "name": "清洁",
                "en": "CLEANSER"
            },
            {
                "_id": "5f3f33a90f19ee87388f0347",
                "key": "makeup_remover",
                "area": "底子区",
                "name": "卸妆",
                "en": "MAKEUP REMOVER"
            },
            {
                "_id": "5f3f33a90f19ee87388f0348",
                "key": "foundation",
                "area": "底子区",
                "name": "粉底",
                "en": "FOUNDATION"
            },
            {
                "_id": "5f3f33a90f19ee87388f0349",
                "key": "uv_protect",
                "area": "底子区",
                "name": "防晒/隔离",
                "en": "UV PROTECT"
            },
            {
                "_id": "5f3f33a90f19ee87388f034a",
                "key": "concealer",
                "area": "底子区",
                "name": "遮瑕",
                "en": "CONCEALER"
            },
            {
                "_id": "5f3f33a90f19ee87388f034b",
                "key": "fixed",
                "area": "底子区",
                "name": "定妆",
                "en": "FIXED"
            },
            {
                "_id": "5f3f33a90f19ee87388f034c",
                "key": "eyeliner",
                "area": "修容改造区",
                "name": "眼线",
                "en": "EYELINER"
            },
            {
                "_id": "5f3f33a90f19ee87388f034d",
                "key": "eyebrow",
                "area": "修容改造区",
                "name": "眉笔",
                "en": "EYEBROW"
            },
            {
                "_id": "5f3f33a90f19ee87388f034e",
                "key": "mascara",
                "area": "修容改造区",
                "name": "睫毛膏",
                "en": "MASCARA"
            },
            {
                "_id": "5f3f33a90f19ee87388f034f",
                "key": "highlighter",
                "area": "修容改造区",
                "name": "高光",
                "en": "HIGHLIGHTER"
            },
            {
                "_id": "5f3f33a90f19ee87388f0350",
                "key": "contour",
                "area": "修容改造区",
                "name": "修容",
                "en": "CONTOUR"
            },
            {
                "_id": "5f3f33a90f19ee87388f0351",
                "key": "beauty_tools",
                "area": "工具区",
                "name": "美妆工具",
                "en": "BEAUTY TOOLS"
            }
        ]
    },
    "skincare": {
        "name": "护肤",
        "data": [
            {
                "_id": "5f3f33aa0f19ee87388f0352",
                "key": "toner",
                "area": "护肤区",
                "name": "水",
                "en": "TONER"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0353",
                "key": "essence",
                "area": "护肤区",
                "name": "精华",
                "en": "ESSENCE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0354",
                "key": "lotion&cream",
                "area": "护肤区",
                "name": "乳液/面霜",
                "en": "LOTION&CREAM"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0355",
                "key": "eye_care",
                "area": "护肤区",
                "name": "眼部修护",
                "en": "EYE CARE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0356",
                "key": "cleanser",
                "area": "底子区",
                "name": "清洁",
                "en": "CLEANSER"
            }
        ]
    },
    "life": {
        "name": "旅行生活区",
        "data": [
            {
                "_id": "5f3f33aa0f19ee87388f0357",
                "key": "perfume",
                "area": "香氛区",
                "name": "香水",
                "en": "PERFUME"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0358",
                "key": "home_fragrance",
                "area": "香氛区",
                "name": "居家香氛",
                "en": "HOME FRAGRANCE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0359",
                "key": "mask",
                "area": "护理区",
                "name": "面膜",
                "en": "MASK"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035a",
                "key": "personal_care",
                "area": "护理区",
                "name": "个人洗护",
                "en": "PERSONAL CARE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035b",
                "key": "moisturizer",
                "area": "护理区",
                "name": "香体乳",
                "en": "MOISTURIZER"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035c",
                "key": "mini_products",
                "area": "体验区",
                "name": "大牌体验装",
                "en": "MINI PRODUCTS"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035d",
                "key": "mini_set",
                "area": "体验区",
                "name": "体验套装",
                "en": "MINI SET"
            },
            {
                "_id": "5f42385711580906269cb887",
                "key": "jewelry",
                "area": "饰品区",
                "name": "饰品",
                "en": "JEWELRY"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035e",
                "key": "the_shouter",
                "area": "生活美学区",
                "name": "生活美学品",
                "en": "THE SHOUTER"
            }
        ]
    },
    "ingredient": {
        "name": "成分墙",
        "data": [
            {
                "_id": "5f42440037000d629f42eb84",
                "key": "moisturing",
                "name": "补水保湿",
                "en": "MOISTURZING"
            },
            {
                "_id": "5f42440037000d629f42eb8f",
                "key": "whitening",
                "name": "美白淡斑",
                "en": "WHITENING"
            },
            {
                "_id": "5f42440037000d629f42eb99",
                "key": "anti_ances",
                "name": "抗痘",
                "en": "ANTI-ANCES"
            },
            {
                "_id": "5f42440037000d629f42ebac",
                "key": "stabilzing",
                "name": "维稳修复",
                "en": "STABILZING"
            },
            {
                "_id": "5f42440037000d629f42ebb6",
                "key": "anti_aging",
                "name": "抗老祛皱",
                "en": "ANTI-AGING"
            }
        ]
    },
    "all": {
        "name": "",
        "data": [
            {
                "_id": "5f3f33a90f19ee87388f0342",
                "key": "lipstick",
                "area": "口红区",
                "name": "口红",
                "en": "LIPSTICK",
            },
            {
                "_id": "5f3f33a90f19ee87388f0343",
                "key": "eyeshadow",
                "area": "玩色区",
                "name": "眼影",
                "en": "EYE SHADOW"
            },
            {
                "_id": "5f3f33a90f19ee87388f0344",
                "key": "blush",
                "area": "玩色区",
                "name": "腮红",
                "en": "BLUSH"
            },
            {
                "_id": "5f3f33a90f19ee87388f0345",
                "key": "nail",
                "area": "玩色区",
                "name": "美甲片",
                "en": "NAIL"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0356",
                "key": "cleanser",
                "area": "底子区",
                "name": "清洁",
                "en": "CLEANSER"
            },
            {
                "_id": "5f3f33a90f19ee87388f0347",
                "key": "makeup_remover",
                "area": "底子区",
                "name": "卸妆",
                "en": "MAKEUP REMOVER"
            },
            {
                "_id": "5f3f33a90f19ee87388f0348",
                "key": "foundation",
                "area": "底子区",
                "name": "粉底",
                "en": "FOUNDATION"
            },
            {
                "_id": "5f3f33a90f19ee87388f0349",
                "key": "uv_protect",
                "area": "底子区",
                "name": "防晒/隔离",
                "en": "UV PROTECT"
            },
            {
                "_id": "5f3f33a90f19ee87388f034a",
                "key": "concealer",
                "area": "底子区",
                "name": "遮瑕",
                "en": "CONCEALER"
            },
            {
                "_id": "5f3f33a90f19ee87388f034b",
                "key": "fixed",
                "area": "底子区",
                "name": "定妆",
                "en": "FIXED"
            },
            {
                "_id": "5f3f33a90f19ee87388f034c",
                "key": "eyeliner",
                "area": "修容改造区",
                "name": "眼线",
                "en": "EYELINER"
            },
            {
                "_id": "5f3f33a90f19ee87388f034d",
                "key": "eyebrow",
                "area": "修容改造区",
                "name": "眉笔",
                "en": "EYEBROW"
            },
            {
                "_id": "5f3f33a90f19ee87388f034e",
                "key": "mascara",
                "area": "修容改造区",
                "name": "睫毛膏",
                "en": "MASCARA"
            },
            {
                "_id": "5f3f33a90f19ee87388f034f",
                "key": "highlighter",
                "area": "修容改造区",
                "name": "高光",
                "en": "HIGHLIGHTER"
            },
            {
                "_id": "5f3f33a90f19ee87388f0350",
                "key": "contour",
                "area": "修容改造区",
                "name": "修容",
                "en": "CONTOUR"
            },
            {
                "_id": "5f3f33a90f19ee87388f0351",
                "key": "beauty_tools",
                "area": "工具区",
                "name": "美妆工具",
                "en": "BEAUTY TOOLS"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0352",
                "key": "toner",
                "area": "护肤区",
                "name": "水",
                "en": "TONER"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0353",
                "key": "essence",
                "area": "护肤区",
                "name": "精华",
                "en": "ESSENCE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0354",
                "key": "lotion&cream",
                "area": "护肤区",
                "name": "乳液/面霜",
                "en": "LOTION&CREAM"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0355",
                "key": "eye_care",
                "area": "护肤区",
                "name": "眼部修护",
                "en": "EYE CARE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0357",
                "key": "perfume",
                "area": "香氛区",
                "name": "香水",
                "en": "PERFUME"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0358",
                "key": "home_fragrance",
                "area": "香氛区",
                "name": "居家香氛",
                "en": "HOME FRAGRANCE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f0359",
                "key": "mask",
                "area": "护理区",
                "name": "面膜",
                "en": "MASK"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035a",
                "key": "personal_care",
                "area": "护理区",
                "name": "个人洗护",
                "en": "PERSONAL CARE"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035b",
                "key": "moisturizer",
                "area": "护理区",
                "name": "香体乳",
                "en": "MOISTURIZER"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035c",
                "key": "mini_products",
                "area": "体验区",
                "name": "大牌体验装",
                "en": "MINI PRODUCTS"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035d",
                "key": "mini_set",
                "area": "体验区",
                "name": "体验套装",
                "en": "MINI SET"
            },
            {
                "_id": "5f42385711580906269cb887",
                "key": "jewelry",
                "area": "饰品区",
                "name": "饰品",
                "en": "JEWELRY"
            },
            {
                "_id": "5f3f33aa0f19ee87388f035e",
                "key": "the_shouter",
                "area": "生活美学区",
                "name": "生活美学品",
                "en": "THE SHOUTER"
            }
        ]
    }
}


function buildMenu(type) {
	const diff = CONFIG[type].diff
	const start = CONFIG[type].start
	const box = CONFIG[type].box
	const image = CONFIG[type].image
	const text = CONFIG[type].text

	const direction = type === 'vertical' ? 'top' : 'left'
	const key = type === 'vertical' ? 'height' : 'width'

	let result = {}

	for (let _key in MENU) {
		let distance = start
		let obj = MENU[_key]
		const data = obj.data
		const len = data.length
		const newData = []
		for (let i = 0; i < len; i++) {
			const index = i % 4
			const lastIndex = index-1 < 0 ? 3 : index-1
			let _box = JSON.parse(JSON.stringify(box[index]))
			if (i) {
				distance = parseFloat((distance + parseFloat(box[lastIndex][key].replace(/[^\d.]/g, '')) + diff[index]).toFixed(2));
			}
			_box[direction] = `${distance}px`
			const item = {
		        _id: data[i]._id || "5f1596af9352e2460f338806",
	            key: data[i].key || 'lipstick',
	            area: data[i].area,
	            name: data[i].name,
	            en: data[i].en,
				box: _box,
				image: image[index],
				text: text[index]
			}
			newData.push(item)
		}
		obj.data = newData
		result[_key] = obj
	}
	return result;
}


const json = buildMenu('horizontal');
console.log(JSON.stringify(json));
fs.writeFileSync(path.join(__dirname, '../pages/list/src/data/menu.json'), JSON.stringify(json), 'utf8');
