
{% macro data(id, output) %}
	{% if output %}
	<script type="application/json" data-id="zm.data.{{ id }}">
		{% autoescape false %} {{ output|json }} {% endautoescape %}
	</script>
	{% endif %}
{% endmacro %}