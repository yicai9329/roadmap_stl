const state = {
	captionItems:  [
	{ captionI: "报告摘要" , reportID: this.reportID,
	children:[ {captionII: "全球经济形势的整体判断"}, {captionII: "国内经济形势的整体判断"} ]
},                                                                                                              
{ captionI: "全球经济发展趋势", reportID: this.reportID,
children:[{captionII: "全球经济保持回暖态势，美欧中制造业景气达近年高点"}, {captionII: "全球贸易出口增势强劲，贸易失衡依然严重"}, {captionII: "前三季美元疲软，欧、日元和人民币走势强劲"}]
},
{captionI: "产业经济分析", reportID: this.reportID,
children:[{captionII: "大宗商品价格冲高回落，钢铁价格领头"},{captionII: "钢铁效益明显回升，通信、计算机、仪器仪表与汽车产业领增"}]
},
{captionI: "结论及建议", reportID: this.reportID, children:[
{captionII: "整体结论及趋势预测"}
]}                                                                                                                                                                                                                                                                                                                                                                                                                                                   
]
}

var swapItems = function(arr, index1, index2) {
	if (arr instanceof Array) {
		arr[index1] = arr.splice(index2, 1, arr[index1])[0];
		return arr;
	}
};


const actions = {
	removeCaptionItemI({commit}, indexI){
		commit('removeCaptionItemI', {indexI})
	},
	removeCaptionItemII({commit}, indexI, indexII){
		console.log("INDEX II IS " + indexII)
		commit('removeCaptionItemII', {indexI, indexII})
	},
	captionIUpOne({commit}, indexI){
		commit('captionIUpOne', {indexI})
	},
	captionIIUpOne({commit}, indexI,indexII){
		console.log("INDEX II IS " + indexII)
		commit('captionIIUpOne', {indexI,indexII})
	},
	captionIDownOne({commit}, indexI){
		commit('captionIDownOne', {indexI})
	},
	captionIIDownOne({commit}, indexI, indexII){
		commit('captionIIDownOne', {indexI, indexII})
	}
}

const mutations = {
	removeCaptionItemI(state, {indexI}){
		state.captionItems.splice(indexI, 1)
	},
	removeCaptionItemII(state, {indexI, indexII}){
		console.log("INDEX II IS " + indexII)
		state.captionItems[indexI].children.splice(indexII,1)
	},
	captionIUpOne(state, {indexI}){
		if(indexI === 0){
           return;
		}
		swapItems(state.captionItems, indexI, indexI-1);
	},
	captionIIUpOne(state, {indexI,indexII}){
		console.log("INDEX II IS " + indexII)
		if(indexII === 0) {
			return;
		}
		swapItems(state.captionItems[indexI].children, indexII, indexII-1);
	},
    captionIDownOne(state, {indexI}){
    	if(indexI === state.captionItems.length-1){
    		return;
    	}
    	swapItems(state.captionItems, indexI, indexI+1);
    },
    captionIIDownOne(state, {indexI,indexII}){
    	if(indexII === state.captionItems[indexI].length-1){
    		return;
    	}
    	swapItems(state.captionItems[indexI].children, indexII, indexII+1);
    }
}


export default {
	state,
	actions,
	mutations
}