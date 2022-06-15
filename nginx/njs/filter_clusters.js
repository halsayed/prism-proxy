function filter(r) {
    var payload = JSON.parse(r.variables.request_body);
    if (payload.entity_type == "cluster")
    {
        r.return(403, "");
    }
    else
    {
        r.internalRedirect('@prism');
    }
}

export default {filter}
