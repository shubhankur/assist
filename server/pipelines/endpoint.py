"""Voice activity detection and text endpointing utilities."""

async def commit_text(partial: str) -> bool:
    """Return True if partial text forms a complete sentence."""
    return partial.endswith(('.', '?', '!'))
