<svelte:head>
	<style>
		.boxes a {
			color: black;
			text-decoration: none;
			padding: 1em;
		}
		.boxes a:hover {
			text-decoration: none;
		}
		.boxes div {
			margin: 0.5em;
			padding: 0.5em;
			border-radius: 3px;
			border: 1px solid rgba(0, 0, 0, 0);
			transition: 0.25s;
		}
		.boxes div:hover {
			border: 1px solid rgba(0, 0, 0, 0.08);
			transition: 0.25s;
		}
		.boxes h3 {
			display: inline-block;
		}
		.boxes p,
		.boxes div {
			margin: 0;
		}
	</style>
</svelte:head>

<h1>Andre grupper relatert til psykologi</h1>

<div class="boxes">

	<a href="https://www.facebook.com/bedpsyk">
		<div>
			<h3>Bedriftsportalen</h3>
			<p>
				Bedriftsportalen for psykologi er en frivillig
				studentorganisasjon ved Psykologisk institutt NTNU som jobber
				for å knytte studentene nærmere arbeidslivet! Vi vil at
				studentene skal få opp øynene for hva man kan gjøre med en
				utdanning innenfor psykologi, samt at bedrifter skal få innsikt
				i vår kompetanse. Dette gjøres i form av bedriftspresentasjoner,
				jobbsøkerkurs, etc.
			</p>
		</div>
	</a>

	<a href="https://www.facebook.com/pstimulus">
		<div>
			<h3>pStimulus</h3>
			<p>
				pStimulus er linjeforeningen for masterstudentene i psykologi
				ved NTNU. Vi er til for å legge til rette for et godt faglig og
				sosialt miljø for deg som student.
			</p>
		</div>
	</a>

	<a href="https://psykologisktidsskrift.no">
		<div>
			<h3>Psykologisk Tidsskrift</h3>
			<p>
				Psykologisk Tidsskrift NTNU er et fagtidsskrift og en nettside
				drevet av en redaksjon bestående av frivillige og engasjerte
				psykologistudenter.
			</p>
		</div>
	</a>

	<a href="https://www.facebook.com/Psykologistudenterompsykeogsex/">
		<div>
			<h3>POPS: Psykologistudenter om psyke og sex</h3>
			<p>
				POPS er en studentorganisasjon bestående av psykologistudenter
				som jobber med å spre kunnskap om temaer knyttet til psyke og
				seksualitet.
			</p>
		</div>
	</a>

	<a href="https://www.psykologidagene.no">
		<div>
			<h3>Psykologidagene</h3>
			<p>
				Psykologidagene er et årlig, non-profit arrangement ved
				Psykologisk Institutt på NTNU.
			</p>
		</div>
	</a>
</div>
