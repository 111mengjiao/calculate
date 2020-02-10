<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>document</title>
		<link rel="stylesheet" type="text/css" href="calculator.css">
		<meta name = "viewport" content = "width=device-width">
		<!-- IE -->
		<meta name = "viewport" content = "width = device-width,initial-scale = 1">
		<style type="text/css">
			input{
				outline: none;
			}
			input:focus{
				outline: none;
			}
		</style>
	</head>
	<body>
		<div class="calculator">
			<div class="screen">
				<input type="text" name="typein" value="0" class="screenIn"/>
				<!-- <input type="text" name="" value="" class="resultIn"/> -->
			</div>
			<div class="main">
				<ul class="operator">
					<li><input type="button" value="C" onclick = "screenIn.value = '0'" class="operator" style="width:42vw"></li>
					<li><input type="button" value="/" onclick = "add('/')"  class="operator"style="width:27vw"></li>
					<li><input type="button" value="*" onclick = "add('*')"  class="operator"style="width:27vw"></li>
				</ul>
				<ul>
					<li><input type="button" value="7" onclick = "add('7')" class="oprd"></li>
					<li><input type="button" value="8" onclick = "add('8')" class="oprd"></li>
					<li><input type="button" value="9" onclick = "add('9')" class="oprd"></li>
					<li><input type="button" value="-" onclick = "add('-')"  class="operator"></li>
				</ul>
				<ul>
					<li><input type="button" value="4" onclick = "add('4')" class="oprd"></li>
					<li><input type="button" value="5" onclick = "add('5')" class="oprd"></li>
					<li><input type="button" value="6" onclick = "add('6')" class="oprd"></li>
					<li><input type="button" value="+" onclick = "add('+')"  class="operator"></li>
				</ul>
				<ul>
					<li><input type="button" value="1" onclick = "add('1')" class="oprd"></li>
					<li><input type="button" value="2" onclick = "add('2')" class="oprd"></li>
					<li><input type="button" value="3" onclick = "add('3')" class="oprd"></li>
					<li><input type="button" value="=" onclick = "calc()"  class="result"></li>
				</ul>
				<ul>
					<li><input type="button" value="(" onclick = "add('(')"  class="operator"></li>
					<li><input type="button" value=")" onclick = "add(')')"  class="operator"></li>
					<li><input type="button" value="0" onclick = "add('0')" class="oprd"></li>
					<li><input type="button" value="." onclick = "add('.')" class="oprd"></li>
				</ul>
			</div>
		</div>
		<script type="text/javascript" src="calculator.js"></script>
	</body>
</html>
