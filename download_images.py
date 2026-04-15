import urllib.request
import ssl
import os
from pathlib import Path

# Bypass SSL verification (for development only)
ssl._create_default_https_context = ssl._create_unverified_context

# Image URLs to download
images = {
    # Alumni images
    "alumni/hero.jpg": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
    "alumni/anjali-s.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuC9HRB7jyjqkZ9jobshxPHGHPldH3CDnHIqjetoLvWJV8P5V72OpS-szbrZlFd3B5QEfuIZYDJvenmvTFAqwI1yTjAAa6wFMuahIXIpCCdA7-bMV2j3GIUp8dUL4feQX-QfqXHT6LrVeL8DTpDwSgz7Ht18ddmeHmp0_X9cRONg4dkevIc03GPPDVqjXWFf3-w6dzAvRuD7DmIVeNR2Jrs-BGqSjgX4JV7-dEzCGcZ4j9DG8kU1DmJqquEs7jMAiDcz8UOHJZSzt9k",
    "alumni/sandeep-k.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuAFEj5ktktQp-XJ5ifqG1_QmRLOBNLY-UPT3GvmJMWEKbS3bd_WzsocM8vgZVGxzKacjIc1xYPmxSikPPNN7jIB0LPFB86UkuzC705a3IEjhnIopSxKueIOaJYiQnFZxZ0GxthSJKiD38yCqZKUB9Xxqub5tCykN4rCwOXBz9wPc9sRvBguC24ei884JIv2ZHQO_ZWd5uEorDPGl1P11QAlP3YDiiyTaXrpdu1QOeKmvz3DkWdccMp9AcwyoGKJjdTo37HL-tkMzFE",
    "alumni/ritika-p.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIRm8kShTTgfmM_Lpfi7BvjbHbEyD48XRvmUNb_uK_zq8X2kx_eOhthNfwdjY19iNDGMzcKJJLWtsJpKM1DmdGJOClmoGV03h8bYdb2soI3jMZZ_zlHTlMD7IK0_5c-75tkoRepjm2lY6fAKySJYCKKmhgDGD1Lm168Yg40src8bth_DO6hJSw0hQomgm8HPagpa8cEnPSJrokFyMGxR_bycwB7a8IB92NypRgLJWM9TGi8SEnY8kJWy09kdH0x5HzCe9sooSS3yg",
    "alumni/deepak-b.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuCboZSMxZzgB9DUmbwRBsj8avCubcSEpnsCZeo6Y6HCeXomDHJSeAsziVtcB1Hs4ErmIXtpUSMs-IUBOMMm-AjLuNapka7RmxMWiHFZP923vwQdNxTcGEmOU1k-AqifvvSyWqv6ZemS76w0w3vtiiqRh13n7xgu7Ll7q0ma6ieAwPgG8F5QeXaervB_pP-mE87dEjXb2fFDd1q5dBj3wrBSVvrlBNts-NCOWsD0_42xQV-w15lCRSmJD_WrCmEL2N8RdEAZVco-8pk",
    "alumni/aaryav-m.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIiexRnnuxFNCi76ovxbBxHGFSePphTVUW-cvWq5b-aWWjUOu4MoOlTBPFeRGzGRF_0m7wTxg27m1qO_W7nFpi8B6rUpe9fUBMd1vtwy2PMyTmO-PDovIqzIB3yIEBN03m3y_6aS58kZz-fm83ExoXTyFITtjw6XBm1yhq0yp3_AXZn7UcvPDOMUP0Mq3Kl9qltxSwRTco4Iyru3QIHZHafQipgRc-j30ObfzaB7bbkAi34YMIylUgCORnhWilkG13gbezFxDpRY8",
    "alumni/priya-r.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJY-UJ4ky-05vQWnHKb_SZXiXLKBgONYnI_2Zx9plGYc_h-vV-8QAyfWTN_akQQ8caU9YbRqjGgQTXrLvMP61ie6jvXclZgkuNI4J3FhNb2lUVVhLvT0XXpUlVoRG1bSGLA8PM4H9h2ihi-QJxCXGproOC7ntvzTZic1ACxcnKNFzCdjgEP_V6AVINQFujA6YuVnIU03O_G8xyMBrGJYQmhRLsFwrDwOsbcpPfRGR73f9Mc0JEx2IBcflILcXz3Bh456WDItMX6E",
    "alumni/cta-background.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuCCqzr1GcJSasVR2jDBQnrLmqumS6OOO2qnEcvmBaGBqUgrpNSwjcXapd65KE5GpSvRmuxAJPr15JJw6AK-J1YOHr7eZlEJ7Zywkxp6bhVorbhUXfutgstieaKJO9M8mLRP0E-vKx86KLe-liDkYfJKtI9GR050atSZ7n-475-f7gdWHHFCiHIXPkWMji6HjxhCP1u6whnUryGoZYhMAyGBI2gifXsdgcbzsnAS96ExRg0MPwxpgRpvHVb2NbA_rCdlNZSH1a6KEWc",
    # University images
    "universities/la-trobe/hero.jpg": "https://lh3.googleusercontent.com/aida-public/AB6AXuAisJ3a2ace5yHv52e0ZI46hd1Zi0LX3tL87u2JgZb0Di0dNf1bmDtazxo-dJT0WYYJQwueqFA0f57OUeR_Zm21BDBrvfZfPoUoxLxXF68gCeNIIBRcka9ZNmLHj3o9RwBYbnSC2uWmh7Y_S7DcAlIKunmX-r5mCEvAq45eeeau17QaYZE8s8B9noyknih6RRxbOoNMXi8lOmjjGsd27TPOSlgmBY_8EjILUgfnD9DwapQdloCdAoAJrey3OtOQf2NvOmR1dRFuIN4",
}

base_path = Path("Frontend/public/assets")
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print("Starting image downloads...")
for relative_path, url in images.items():
    file_path = base_path / relative_path
    try:
        print(f"Downloading: {relative_path}...", end=" ")
        
        file_path.parent.mkdir(parents=True, exist_ok=True)
        
        req = urllib.request.Request(url, headers=headers)
        urllib.request.urlretrieve(url, file_path)
        print(f"✓ Done")
    except Exception as e:
        print(f"✗ Error: {str(e)}")

print("\nAll downloads completed!")
