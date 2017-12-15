<template>
	<div class="col s3 green lighten-3" id="captionSelect">
		<ul class="collapsible" data-collapsible="accordion">
			<template v-for="(captionItem, indexI) in captionItems">
				<li :key="captionItem.captionI">
					<button @click="captionIUpOne(indexI)">up</button><button @click="captionIDownOne(indexI)">down</button><div class="collapsible-header"><i class="material-icons">place</i>{{captionItem.captionI}}<button @click="removeCaptionItemI(indexI)">X</button></div>
					<div class="collapsible-body">
						<template v-for="(subTitle, indexII) in captionItem.children">
							<ul class="collection" :key="subTitle.captionII">
								<li class="collection-item"><button @click="captionIIUpOne([indexI,indexII])">up</button><button @click="captionIIDownOne([indexI,indexII])">down</button><a href="#!">{{subTitle.captionII}}<button @click="removeCaptionItemII([indexI,indexII])">X</button></a></li>
							</ul>
						</template>
					</div>
				</li>
			</template>
		</ul>
		<div class="row" id="addButtonForCaptionOne">
			<span class="deep-purple-text darken-4">增加一级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red modal-trigger" href="#modal33"><i class="material-icons">add</i></a>
			<span class="deep-purple-text darken-4">减去一级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">cancel</i></a>
		</div>
		<div class="row" id="addButtonForCaptionTwo">
			<span class="deep-purple-text darken-4">增加二级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
			<span class="deep-purple-text darken-4">减少二级标题</span>&nbsp;<a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">cancel</i></a>
		</div>
		<div id="modal33" class="modal">
			<div class="modal-content">
				<input placeholder="一级标题" id="new_captionI" type="text" v-model="newCaptionI">
				<label for="new_captionI">新增一级标题</label>
			</div>
			<div class="modal-footer">
				<a class="modal-action modal-close waves-effect waves-green btn-flat" @click="addCaptionI">确认</a>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		name: 'docItemSelect',
		data () {
			return {
			}
		},
		computed: {
			...mapState({
				captionItems: state => state.docItemSelect.captionItems,
				newCaptionI: state => state.docItemSelect.newCaptionI
			}),
		},
		methods: {
			...mapActions([
				'removeCaptionItemI',
				'removeCaptionItemII',
				'captionIUpOne',
				'captionIDownOne',
				'captionIIUpOne',
				'captionIIDownOne',
				'addCaptionI'
				]),
		},
		props: {
			reportID: Number
		},
		mounted () {
			this.$nextTick(function () {
				jQuery(document).ready(function(){
					jQuery('.collapsible').collapsible();
					jQuery('.modal').modal();
				});
			})

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#captionSelect {
		min-width: 20em;
		min-height: 30em;
		max-width: 22em;
		max-height: 40em;
		overflow: scroll;
	}
</style>