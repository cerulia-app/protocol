$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$files = Get-ChildItem src/lexicon/*.json | ForEach-Object { $_.FullName }
if ($files.Count -eq 0) {
  throw 'No lexicon files found in src/lexicon.'
}

node_modules/.bin/lex.cmd gen-server --yes src/generated @files
