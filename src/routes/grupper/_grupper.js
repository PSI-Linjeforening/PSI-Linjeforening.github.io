const groups = [
  {
    title: 'Psykopatur',
    slug: 'psykopatur',
    html: `
	<p>Velkommen til Psykopatur sin Facebookgruppe! Vi er turgruppen for bachelor- og årsstudiumstudenter i psykologi ved NTNU. Vår ambisjon er å skape sosialt samvær for friluft- og sportsinteresserte studenter på psykologi. Her vil vi arrangere både store og små arrangementer, alt fra surfeturer til Stadt, til tur i bymarka. Ingen kunnskap trengs på forhånd, og alle er hjertelig velkommen! :D</p>

	<h3>AKTIVITETSKOMITÈEN:</h3>
	<ul>
		<li>Anna Viktoria Hellevang (aktivitetsansvarlig)</li>
		<li>Mathias Skjæran Landrø</li>
		<li>Sondre Abrahamsen</li>
		<li>Kristine Olsøy</li>
		<li>Hanna Hole Kjøsen</li>
		<li>Stian Søreng </li>
	</ul>
		`
  },

  {
    title: 'PSIng',
    slug: 'psing',
    html: `
			<p>Dette er gruppa for PSing - koret for studenter på årsstudium og bachelor psykologi! PSing er et lavterskel-kor for alle som synes det er gøy å synge, og en perfekt mulighet til å bli kjent med andre PSI-ere. På denne gruppa postes info om påmelding og andre relevante beskjeder 🙂 </p>
		`
  }
];

groups.forEach(group => {
  group.html = group.html.replace(/^\t{3}/gm, '');
});

export default groups;
