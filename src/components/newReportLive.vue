<template>
	<div id="newReportLive">
		<div id="reportInfo" class="col s12 card-panel cyan accent-2">
			<p class="text-darken-2">类别:</p>
			<p class="text-darken-2">年月:</p>
			<p class="text-darken-2">主题: </p>
			<a class="waves-effect waves-light btn col s2 push-s10">保存</a>
			<a class="waves-effect waves-light btn col s2 push-s7">提交</a>
		</div>
		<div class="row">
			<div class="col s3 green lighten-3">
				<ul class="collapsible" data-collapsible="accordion">
					<li>
						<div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
						<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">place</i>Second</div>
						<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
					</li>
					<li>
						<div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
						<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
					</li>
				</ul>
			</div>
			<div class="col s9">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'newReportLive',
		data () {
			return {
				msg: 'This is LiveNewReport'
			}
		},
		methods: {
          initForCollapse: function () {

          }
		},
		mounted () {
			jQuery(document).ready(function(){
				jQuery('.collapsible').collapsible();
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
