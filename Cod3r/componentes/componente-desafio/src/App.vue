<template>
	<v-app>
		<app-menu></app-menu>

		<app-toolbar></app-toolbar>

		<v-content>
			<app-carousel></app-carousel>
		</v-content>
		
		<app-footer />		
	</v-app>
</template>

<script>
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'
import Menu from './Menu.vue'
import Toolbar from './Toolbar.vue'

export default {
	components: { 
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-toolbar': Toolbar,
		'app-menu': Menu 
	}
}
</script>
