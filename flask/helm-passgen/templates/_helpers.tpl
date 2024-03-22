{{/* _helpers.tpl */}}
{{- define "flask-password-generator.name" -}}
{{- default "flask-password-generator" .Chart.Name -}}
{{- end -}}

{{- define "flask-password-generator.fullname" -}}
{{- if .Release.Name }}
{{- printf "%s-%s" .Release.Name (include "flask-password-generator.name" .) | trunc 63 | trimSuffix "-" -}}
{{- else }}
{{- printf "%s" (include "flask-password-generator.name" .) | trunc 63 | trimSuffix "-" -}}
{{- end }}
{{- end -}}
