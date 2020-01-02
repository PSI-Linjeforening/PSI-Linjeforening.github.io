import gorups from './_grupper.js';

const contents = JSON.stringify(
  gorups.map(group => {
    return {
      title: group.title,
      slug: group.slug
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
