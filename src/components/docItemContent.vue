<template>
	<div class="col s9" id="reportContent">
		<div id="reportTitleOne" class="col s9 offset-s3 card-panel blue lighten-3">
			<label for="caption1">一级标题:</label><input placeholder="请输入一级标题" id="caption1" type="text" class="validate"><br />
			<label for="caption2">二级标题:</label><input placeholder="请输入二级标题" id="caption2" type="text" class="validate">
		</div>
		<div id="reportTtileTwo" class="row">
			<textAndImageControl></textAndImageControl>
			<div id="reportTextAndImage" class="col s9 offset-s1 deep-orange lighten-5">

			</div>
		</div> 
	</div>
</template>

<script>
	import textAndImageControl from './textAndImageControl'
	export default {
		name: 'docItemContent',
		data () {
			return {

			}
		},
		components: {
          textAndImageControl
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
