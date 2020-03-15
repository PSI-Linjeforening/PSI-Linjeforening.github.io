#!/bin/sh

# Print some static credits data for images
echo "Images:
=======
Rorschach background image: 
- Author: Hermann Rorschach (died 1922) [Public Domain] - The tenth blot of the Rorschach inkblot test
- Licence: Public Domain
- Description: The tenth blot of the Rorschach inkblot test
- Resource: https://en.wikipedia.org/wiki/File:Rorschach_blot_10.jpg [09.02.2020]
- Modified: true

Brain region illustration: OpenStax College [Creative Commons Attribution 3.0 Unported]
- Author: OpenStax College
- Licence: Creative Commons Attribution 3.0 Unported
- Description: Brocas and Wernickes Areas
- Resource: https://commons.wikimedia.org/wiki/File:1605_Brocas_and_Wernickes_Areas-02.jpg [09.02.2020]
- Modified: true" > static/credits.txt

# Add GitHub authors, sorted by amount of commits
printf "\n\nGitHub Authors:\n===============\n" >> static/credits.txt
git log --pretty="%an - %ae" | sort -r | uniq -c | sort -n | awk '{$1="" "-"}1' >> static/credits.txt


# Add node credits
printf "\n\nNode Dependency Authors:\n========================\n" >> static/credits.txt
npx creditstxt >> static/credits.txt
