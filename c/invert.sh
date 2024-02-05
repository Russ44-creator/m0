#!/bin/bash
# Invert index to create a mapping from terms to URLs containing that term
# The details of the index structure can be seen in the test cases

invert_url="$1"

while read -r line; do
    delimiter="|"
    IFS="$delimiter" read -ra strings <<< "$line"
    echo "${strings[1]} | ${strings[0]} | $invert_url"
done < <(cat | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//' | sort | uniq -c | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//' | sed "s/ / | /g" | sed "s/\t/ / g")