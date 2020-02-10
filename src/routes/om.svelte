<script>
	import Mail from "svelte-icons/go/GoMail.svelte";
	import Map from "svelte-icons/fa/FaMapMarkedAlt.svelte";
	import Messenger from "svelte-icons/fa/FaFacebookMessenger.svelte";
	import Facebook from "svelte-icons/io/IoLogoFacebook.svelte";
	import Snapchat from "svelte-icons/fa/FaSnapchatSquare.svelte";
</script>

<style>
	h2,
	h3 {
		margin-top: 1em;
	}
	ul {
		margin: 0;
	}
</style>

<svelte:head>
	<title>Om</title>
</svelte:head>

<h1>Om PSI</h1>

<p>
	PSI er linjeforeningen for psykologi årsstudium og bachelor ved NTNU.
	Linjeforeningens formål er å samle psykologistudentene til faglige og
	sosiale arrangementer!
</p>

<h3>STYRET 2019/2020:</h3>

<ul>
	<li>
		<b>Leder:</b>
		Svein Fredrik Foshaugen Nyvoll
	</li>
	<li>
		<b>Nestleder:</b>
		Helene Hagen
	</li>
	<li>
		<b>Økonomiansvarlig:</b>
		Emma Birkelund Bendiksen
	</li>
	<li>
		<b>PR-ansvarlig:</b>
		Maria Syrtveit
	</li>
	<li>
		<b>Eventansvarlig:</b>
		Nora Sofie Trohaug
	</li>
	<li>
		<b>Aktivitetsansvarlig:</b>
		Stian Søreng
	</li>
</ul>

<h2>Fnky Freud</h2>
<p>
	Fnky Freud poster mye info fra PSI og kan følges på både facebook og
	snapchat:
</p>
<p>
	<a class="icon medium-big" href="https://www.facebook.com/fnkyfreud/">
		<Facebook title="Fnky Freud på Facebook" />
	</a>
	<a
		class="icon medium-big"
		href="https://www.facebook.com/messages/t/fnkyfreud/">
		<Messenger title="Fnky Freud på Messenger" />
	</a>
	<span class="icon medium-big">
		<Snapchat title="Fnky Freud på Snapchat" />
	</span>
	<span class="medium-big">psi.ntnu</span>
</p>

<h2>Kontakt Oss:</h2>
<p>
	<a class="icon" href="https://m.me/psi.linjeforening">
		<Messenger title="PSI på Messenger" />
		PSI
	</a>
</p>

<p>
	<a class="icon" href="mailto:psi.linjeforening@gmail.com">
		<Mail title="Mail PSI" />
		psi.linjeforening@gmail.com
	</a>
</p>
<p>
	Eventkomitén:
	<a class="icon" href="mailto:psi.eventkom@gmail.com">
		<Mail title="Mail Eventkomitén" />
		psi.eventkom@gmail.com
	</a>
</p>

<p>
	Vi har også kontor på rom 12409, Dragvoll.
	<a
		class="icon"
		href="https://use.mazemap.com/#v=1&center=10.469975,63.407166&zoom=18&sharepoitype=poi&sharepoi=92294&zlevel=2&campusid=18">
		<Map title="Kontoret til PSI på MazeMap" />
		MazeMap
	</a>
</p>
