#!/bin/bash

T_FOLDER=${T_FOLDER:-t}
R_FOLDER=${R_FOLDER:-}

cd "$(dirname "$0")/..$R_FOLDER" || exit 1

DIFF=${DIFF:-diff}

term="stuff"

cat "$T_FOLDER"/d/s_query-input.txt > d/global-index.txt

if $DIFF <(./query.sh "$term") <(cat "$T_FOLDER"/d/s_query-output.txt) > /dev/null;
then
    echo "$0 success: search results are identical"
else
    echo "$0 failure: search results are not identical"
fi
