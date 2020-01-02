// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: 'Tortor felis nam?',
    slug: 'tortor-felis-nam',
    html: `
			<p>Non quam justo donec consequat lectus aenean tristique, feugiat duis cum nibh risus sociosqu dapibus primis, molestie velit scelerisque dis turpis fusce. Tortor felis nam habitasse aliquam pulvinar ante cum penatibus rhoncus class scelerisque viverra volutpat, porttitor condimentum sem in tellus luctus torquent pellentesque nisi ad nullam hendrerit. Pretium gravida ridiculus est taciti iaculis libero vel aliquam, quisque risus phasellus scelerisque mi metus mauris integer fusce, netus hendrerit non quam erat proin ornare.</p>

			<p>Donec class tellus mattis nullam cras inceptos fermentum accumsan facilisi scelerisque facilisis feugiat metus sagittis, nostra dapibus id vehicula justo sollicitudin natoque enim aptent sociis porttitor ultricies dis. Dui venenatis habitasse sapien tincidunt aliquet enim varius penatibus ad per dictumst posuere consequat eget, ridiculus erat feugiat interdum bibendum vivamus orci arcu scelerisque ornare nec semper inceptos. Montes urna proin massa sollicitudin risus phasellus netus quisque condimentum tincidunt, leo fermentum nec pulvinar cum morbi arcu vehicula orci lacus, elementum metus id ligula mus cursus nisl nunc facilisis.</p>
		`
  },

  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing?',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipisicing',
    html: `
			<p>Magnis luctus leo nullam erat primis nec mauris aptent nostra dis, cursus a tempus torquent nibh fusce tortor lectus dictumst:</p>

			<ul>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
				<li>Aenean commodo ligula eget dolor</li>
				<li>Aenean massa</li>
				<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</li>
				<li>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</li>
			</ul>
		`
  },

  {
    title: 'Generalforsamling 2019',
    slug: 'genfors-2019',
    html: `
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam, totam cupiditate dolores odio minus commodi nihil eligendi amet voluptatum blanditiis, placeat, magni harum assumenda dolore culpa quam ipsum et?</p>
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
