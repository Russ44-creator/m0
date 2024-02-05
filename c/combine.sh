#!/bin/bash
#
# Combine terms to create  n-grams (for n=1,2,3) and then count and sort them

declare -a buffer

while read -r line; do
    echo "$line"
    buffer+=("$line")
done

length=${#buffer[@]}


for ((i=0; i<length-1; i++));
do
    printf '%s\t%s\n' "${buffer[i]}" "${buffer[i+1]}"
done

for ((i=0; i<length-2; i++));
do
    printf '%s\t%s\t%s\n' "${buffer[i]}" "${buffer[i+1]}" "${buffer[i+2]}"
done