<template>
  <header>
  	<a href=""></a>
  	<a href=""></a>
  	<h1>NodeBook</h1>
  </header>
    <router-view></router-view>
	<nav>
		<a v-link="{ path: '/foo' }">Go to Foo</a>
    	<a v-link="{ path: '/foo1' }">Go to FOO1</a>
	</nav>
</template>
<style type="text/css">
	header{
		background-color: #12FEDF;
		color: white;
	}
</style>
<script type="text/javascript">
	// alert('dddddddddddd');
</script>